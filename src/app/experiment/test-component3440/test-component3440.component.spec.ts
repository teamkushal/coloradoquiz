import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3440Component } from './test-component3440.component';

describe('TestComponent3440Component', () => {
  let component: TestComponent3440Component;
  let fixture: ComponentFixture<TestComponent3440Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3440Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
