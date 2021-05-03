import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3494Component } from './test-component3494.component';

describe('TestComponent3494Component', () => {
  let component: TestComponent3494Component;
  let fixture: ComponentFixture<TestComponent3494Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3494Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
