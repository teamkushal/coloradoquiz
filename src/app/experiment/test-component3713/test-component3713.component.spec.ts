import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3713Component } from './test-component3713.component';

describe('TestComponent3713Component', () => {
  let component: TestComponent3713Component;
  let fixture: ComponentFixture<TestComponent3713Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3713Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
