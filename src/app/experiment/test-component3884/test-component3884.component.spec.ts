import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3884Component } from './test-component3884.component';

describe('TestComponent3884Component', () => {
  let component: TestComponent3884Component;
  let fixture: ComponentFixture<TestComponent3884Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3884Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
