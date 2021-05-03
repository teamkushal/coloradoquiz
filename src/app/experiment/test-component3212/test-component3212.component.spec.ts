import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3212Component } from './test-component3212.component';

describe('TestComponent3212Component', () => {
  let component: TestComponent3212Component;
  let fixture: ComponentFixture<TestComponent3212Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3212Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
