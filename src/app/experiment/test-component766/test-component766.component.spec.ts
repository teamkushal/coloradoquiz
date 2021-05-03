import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent766Component } from './test-component766.component';

describe('TestComponent766Component', () => {
  let component: TestComponent766Component;
  let fixture: ComponentFixture<TestComponent766Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent766Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
