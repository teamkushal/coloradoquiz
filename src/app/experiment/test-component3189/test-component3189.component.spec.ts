import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3189Component } from './test-component3189.component';

describe('TestComponent3189Component', () => {
  let component: TestComponent3189Component;
  let fixture: ComponentFixture<TestComponent3189Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3189Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
