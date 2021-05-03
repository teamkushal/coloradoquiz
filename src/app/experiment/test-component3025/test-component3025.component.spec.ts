import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3025Component } from './test-component3025.component';

describe('TestComponent3025Component', () => {
  let component: TestComponent3025Component;
  let fixture: ComponentFixture<TestComponent3025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3025Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
