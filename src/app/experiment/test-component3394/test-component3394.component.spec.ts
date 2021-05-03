import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3394Component } from './test-component3394.component';

describe('TestComponent3394Component', () => {
  let component: TestComponent3394Component;
  let fixture: ComponentFixture<TestComponent3394Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3394Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
