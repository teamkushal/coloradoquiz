import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3910Component } from './test-component3910.component';

describe('TestComponent3910Component', () => {
  let component: TestComponent3910Component;
  let fixture: ComponentFixture<TestComponent3910Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3910Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
