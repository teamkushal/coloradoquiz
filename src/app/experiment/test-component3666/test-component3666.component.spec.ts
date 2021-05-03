import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3666Component } from './test-component3666.component';

describe('TestComponent3666Component', () => {
  let component: TestComponent3666Component;
  let fixture: ComponentFixture<TestComponent3666Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3666Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
