import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3104Component } from './test-component3104.component';

describe('TestComponent3104Component', () => {
  let component: TestComponent3104Component;
  let fixture: ComponentFixture<TestComponent3104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3104Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
