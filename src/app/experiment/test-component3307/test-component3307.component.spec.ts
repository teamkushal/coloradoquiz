import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3307Component } from './test-component3307.component';

describe('TestComponent3307Component', () => {
  let component: TestComponent3307Component;
  let fixture: ComponentFixture<TestComponent3307Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3307Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
