import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3998Component } from './test-component3998.component';

describe('TestComponent3998Component', () => {
  let component: TestComponent3998Component;
  let fixture: ComponentFixture<TestComponent3998Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3998Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
