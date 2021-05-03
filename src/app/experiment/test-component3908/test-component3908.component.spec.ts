import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3908Component } from './test-component3908.component';

describe('TestComponent3908Component', () => {
  let component: TestComponent3908Component;
  let fixture: ComponentFixture<TestComponent3908Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3908Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
