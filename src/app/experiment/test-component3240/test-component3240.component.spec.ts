import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3240Component } from './test-component3240.component';

describe('TestComponent3240Component', () => {
  let component: TestComponent3240Component;
  let fixture: ComponentFixture<TestComponent3240Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3240Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
