import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent196Component } from './test-component196.component';

describe('TestComponent196Component', () => {
  let component: TestComponent196Component;
  let fixture: ComponentFixture<TestComponent196Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent196Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
