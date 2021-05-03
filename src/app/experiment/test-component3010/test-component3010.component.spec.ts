import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3010Component } from './test-component3010.component';

describe('TestComponent3010Component', () => {
  let component: TestComponent3010Component;
  let fixture: ComponentFixture<TestComponent3010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3010Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
