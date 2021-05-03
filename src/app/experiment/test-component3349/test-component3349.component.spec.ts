import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3349Component } from './test-component3349.component';

describe('TestComponent3349Component', () => {
  let component: TestComponent3349Component;
  let fixture: ComponentFixture<TestComponent3349Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3349Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
