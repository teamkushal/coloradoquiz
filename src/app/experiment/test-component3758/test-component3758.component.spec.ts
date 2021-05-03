import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3758Component } from './test-component3758.component';

describe('TestComponent3758Component', () => {
  let component: TestComponent3758Component;
  let fixture: ComponentFixture<TestComponent3758Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3758Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
