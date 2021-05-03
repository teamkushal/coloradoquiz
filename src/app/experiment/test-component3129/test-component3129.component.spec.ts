import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3129Component } from './test-component3129.component';

describe('TestComponent3129Component', () => {
  let component: TestComponent3129Component;
  let fixture: ComponentFixture<TestComponent3129Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3129Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
