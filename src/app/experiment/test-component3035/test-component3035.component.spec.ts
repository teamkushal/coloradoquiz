import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3035Component } from './test-component3035.component';

describe('TestComponent3035Component', () => {
  let component: TestComponent3035Component;
  let fixture: ComponentFixture<TestComponent3035Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3035Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
