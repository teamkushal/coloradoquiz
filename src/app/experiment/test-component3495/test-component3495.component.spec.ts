import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3495Component } from './test-component3495.component';

describe('TestComponent3495Component', () => {
  let component: TestComponent3495Component;
  let fixture: ComponentFixture<TestComponent3495Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3495Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
