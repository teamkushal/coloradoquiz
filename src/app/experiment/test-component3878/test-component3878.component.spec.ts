import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3878Component } from './test-component3878.component';

describe('TestComponent3878Component', () => {
  let component: TestComponent3878Component;
  let fixture: ComponentFixture<TestComponent3878Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3878Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
