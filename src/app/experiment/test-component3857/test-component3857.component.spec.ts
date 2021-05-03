import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3857Component } from './test-component3857.component';

describe('TestComponent3857Component', () => {
  let component: TestComponent3857Component;
  let fixture: ComponentFixture<TestComponent3857Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3857Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
