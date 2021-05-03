import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3003Component } from './test-component3003.component';

describe('TestComponent3003Component', () => {
  let component: TestComponent3003Component;
  let fixture: ComponentFixture<TestComponent3003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
