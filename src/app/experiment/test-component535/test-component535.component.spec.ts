import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent535Component } from './test-component535.component';

describe('TestComponent535Component', () => {
  let component: TestComponent535Component;
  let fixture: ComponentFixture<TestComponent535Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent535Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
