import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent347Component } from './test-component347.component';

describe('TestComponent347Component', () => {
  let component: TestComponent347Component;
  let fixture: ComponentFixture<TestComponent347Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent347Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
