import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3792Component } from './test-component3792.component';

describe('TestComponent3792Component', () => {
  let component: TestComponent3792Component;
  let fixture: ComponentFixture<TestComponent3792Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3792Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
