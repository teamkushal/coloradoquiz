import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3132Component } from './test-component3132.component';

describe('TestComponent3132Component', () => {
  let component: TestComponent3132Component;
  let fixture: ComponentFixture<TestComponent3132Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3132Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
