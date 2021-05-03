import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3009Component } from './test-component3009.component';

describe('TestComponent3009Component', () => {
  let component: TestComponent3009Component;
  let fixture: ComponentFixture<TestComponent3009Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3009Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
