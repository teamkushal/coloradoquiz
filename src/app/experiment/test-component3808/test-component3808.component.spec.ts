import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3808Component } from './test-component3808.component';

describe('TestComponent3808Component', () => {
  let component: TestComponent3808Component;
  let fixture: ComponentFixture<TestComponent3808Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3808Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
