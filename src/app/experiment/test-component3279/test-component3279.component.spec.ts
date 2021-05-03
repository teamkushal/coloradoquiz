import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3279Component } from './test-component3279.component';

describe('TestComponent3279Component', () => {
  let component: TestComponent3279Component;
  let fixture: ComponentFixture<TestComponent3279Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3279Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
