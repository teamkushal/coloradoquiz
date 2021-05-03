import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3352Component } from './test-component3352.component';

describe('TestComponent3352Component', () => {
  let component: TestComponent3352Component;
  let fixture: ComponentFixture<TestComponent3352Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3352Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
