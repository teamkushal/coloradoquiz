import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3034Component } from './test-component3034.component';

describe('TestComponent3034Component', () => {
  let component: TestComponent3034Component;
  let fixture: ComponentFixture<TestComponent3034Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3034Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3034Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
