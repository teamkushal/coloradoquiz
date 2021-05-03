import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3949Component } from './test-component3949.component';

describe('TestComponent3949Component', () => {
  let component: TestComponent3949Component;
  let fixture: ComponentFixture<TestComponent3949Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3949Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
