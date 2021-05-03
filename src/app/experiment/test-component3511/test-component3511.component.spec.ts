import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3511Component } from './test-component3511.component';

describe('TestComponent3511Component', () => {
  let component: TestComponent3511Component;
  let fixture: ComponentFixture<TestComponent3511Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3511Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
