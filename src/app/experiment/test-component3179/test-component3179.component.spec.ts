import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3179Component } from './test-component3179.component';

describe('TestComponent3179Component', () => {
  let component: TestComponent3179Component;
  let fixture: ComponentFixture<TestComponent3179Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3179Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
