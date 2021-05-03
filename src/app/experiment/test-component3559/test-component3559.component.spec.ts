import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3559Component } from './test-component3559.component';

describe('TestComponent3559Component', () => {
  let component: TestComponent3559Component;
  let fixture: ComponentFixture<TestComponent3559Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3559Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
