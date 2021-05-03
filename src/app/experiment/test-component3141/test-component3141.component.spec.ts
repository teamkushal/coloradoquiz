import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3141Component } from './test-component3141.component';

describe('TestComponent3141Component', () => {
  let component: TestComponent3141Component;
  let fixture: ComponentFixture<TestComponent3141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3141Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
