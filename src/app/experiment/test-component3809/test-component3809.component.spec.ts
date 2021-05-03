import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3809Component } from './test-component3809.component';

describe('TestComponent3809Component', () => {
  let component: TestComponent3809Component;
  let fixture: ComponentFixture<TestComponent3809Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3809Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
