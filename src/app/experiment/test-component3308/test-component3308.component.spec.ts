import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3308Component } from './test-component3308.component';

describe('TestComponent3308Component', () => {
  let component: TestComponent3308Component;
  let fixture: ComponentFixture<TestComponent3308Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3308Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
