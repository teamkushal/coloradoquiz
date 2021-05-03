import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3813Component } from './test-component3813.component';

describe('TestComponent3813Component', () => {
  let component: TestComponent3813Component;
  let fixture: ComponentFixture<TestComponent3813Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3813Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
