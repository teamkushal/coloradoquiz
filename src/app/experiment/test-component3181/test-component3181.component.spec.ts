import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3181Component } from './test-component3181.component';

describe('TestComponent3181Component', () => {
  let component: TestComponent3181Component;
  let fixture: ComponentFixture<TestComponent3181Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3181Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
