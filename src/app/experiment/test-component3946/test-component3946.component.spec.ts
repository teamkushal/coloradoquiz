import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3946Component } from './test-component3946.component';

describe('TestComponent3946Component', () => {
  let component: TestComponent3946Component;
  let fixture: ComponentFixture<TestComponent3946Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3946Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
