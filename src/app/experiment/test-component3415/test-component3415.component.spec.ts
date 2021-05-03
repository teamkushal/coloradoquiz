import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3415Component } from './test-component3415.component';

describe('TestComponent3415Component', () => {
  let component: TestComponent3415Component;
  let fixture: ComponentFixture<TestComponent3415Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3415Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
