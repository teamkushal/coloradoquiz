import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3145Component } from './test-component3145.component';

describe('TestComponent3145Component', () => {
  let component: TestComponent3145Component;
  let fixture: ComponentFixture<TestComponent3145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3145Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
