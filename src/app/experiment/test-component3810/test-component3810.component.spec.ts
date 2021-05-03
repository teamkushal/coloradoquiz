import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3810Component } from './test-component3810.component';

describe('TestComponent3810Component', () => {
  let component: TestComponent3810Component;
  let fixture: ComponentFixture<TestComponent3810Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3810Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
