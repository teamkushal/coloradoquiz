import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3328Component } from './test-component3328.component';

describe('TestComponent3328Component', () => {
  let component: TestComponent3328Component;
  let fixture: ComponentFixture<TestComponent3328Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3328Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
