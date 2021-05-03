import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3616Component } from './test-component3616.component';

describe('TestComponent3616Component', () => {
  let component: TestComponent3616Component;
  let fixture: ComponentFixture<TestComponent3616Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3616Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
