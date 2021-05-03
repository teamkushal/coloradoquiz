import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3709Component } from './test-component3709.component';

describe('TestComponent3709Component', () => {
  let component: TestComponent3709Component;
  let fixture: ComponentFixture<TestComponent3709Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3709Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
