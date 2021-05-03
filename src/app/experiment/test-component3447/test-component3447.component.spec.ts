import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3447Component } from './test-component3447.component';

describe('TestComponent3447Component', () => {
  let component: TestComponent3447Component;
  let fixture: ComponentFixture<TestComponent3447Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3447Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
