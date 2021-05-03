import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent539Component } from './test-component539.component';

describe('TestComponent539Component', () => {
  let component: TestComponent539Component;
  let fixture: ComponentFixture<TestComponent539Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent539Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
