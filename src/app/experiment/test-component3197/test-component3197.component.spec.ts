import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3197Component } from './test-component3197.component';

describe('TestComponent3197Component', () => {
  let component: TestComponent3197Component;
  let fixture: ComponentFixture<TestComponent3197Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3197Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
